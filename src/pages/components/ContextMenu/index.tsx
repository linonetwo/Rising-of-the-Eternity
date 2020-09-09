import React, { Component } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { connect, ConnectedProps } from 'react-redux';
import { search } from 'fast-fuzzy';
import { Menu, MenuItem, IconName } from '@blueprintjs/core';

import { RootState } from '../../../redux';

export interface IMenuItem {
  title: string;
  type: string;
  icon?: IconName;
}

const menuHeight = 200;
type MenuContainerProps = { top?: string; left?: string; opacity?: number };
const MenuContainer = styled.div`
  position: absolute;
  top: ${({ top }: MenuContainerProps) => top || '-10000px'};
  left: ${({ left }: MenuContainerProps) => left || '-10000px'};
  z-index: 100;

  opacity: ${({ opacity }) => opacity || 0};
  transition: opacity 0.25s;

  ul.bp3-menu {
    max-height: ${menuHeight}px;
    overflow-y: auto;
  }
`;

function mapStoreToProps(store: RootState) {
  const { mouseX, mouseY } = store.cameraMouse;
  return {
    x: mouseX,
    y: mouseY,
  };
}
const connector = connect(mapStoreToProps);

type IPropsFromRedux = ConnectedProps<typeof connector>;
interface IProps extends IPropsFromRedux {
  open?: boolean;
  mountPoint: string;
  items: IMenuItem[];
}
interface IState {
  filter: string;
  items: IMenuItem[];
  position: number[];
}

class ContextMenu extends Component<IProps, IState> {
  state = {
    filter: '',
    items: [],
    position: [0, 0],
  };

  static getDerivedStateFromProps(nextProps: IProps): Partial<IState> | null {
    // stop update menu position when it is open, so it won't follow cursor around
    if (nextProps.open) {
      // eslint-disable-next-line unicorn/no-null
      return null;
    }
    const { x, y } = nextProps;
    return { position: [x, y], items: nextProps.items };
  }

  shouldComponentUpdate(nextProps: IProps) {
    // we need to update only if parent toggle this component, we get latest position data from parent
    if (this.props.open === nextProps.open) {
      return false;
    }
    return true;
  }

  componentDidMount(): void {
    document.addEventListener('keydown', this.handleSearch, false);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', this.handleSearch, false);
  }

  menuRef: HTMLDivElement | undefined;

  /**
   * When a mark button is clicked, toggle the current mark.
   */
  onClickMark = (item: IMenuItem, event: React.MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();
  };

  /**
   * Render a mark-toggling toolbar button.
   */
  renderMarkButton = (item: IMenuItem): JSX.Element => {
    const text = `${item.title}${item.type ? ` ${item.type}` : ''}`;
    return <MenuItem key={text} text={text} icon={item.icon} onMouseDown={(event) => this.onClickMark(item, event)} />;
  };

  getMenuStyle = (): { opacity: number; top: string; left: string } => {
    if (this.menuRef === undefined || this.props.open !== true) return { opacity: 0, top: '-99999px', left: '-99999px' };
    return {
      opacity: 1,
      top: `${this.state.position[1]}px`,
      left: `${this.state.position[0]}px`,
    };
  };

  handleSearch = (event: KeyboardEvent): void => {
    const { opacity } = this.getMenuStyle();
    if (opacity && this.state.items.length > 0) {
      event.preventDefault();
      event.stopPropagation();
      if (event.key === 'Escape') {
        // 有时候用户按 Esc 其实会希望关闭选单
        if (this.state.filter !== '') {
          // 如果有字在过滤器里，才会是指清空过滤器
          this.setState({ filter: '' });
        }
      } else if (event.key === 'Backspace' || event.key === 'Delete') {
        this.setState(({ filter }) => ({
          filter: filter.slice(0, Math.max(0, filter.length - 1)),
        }));
      } else if (/^[\da-z]$/.test(event.key)) {
        this.setState(({ filter }) => ({ filter: filter + event.key }));
      }
    }
  };

  render(): JSX.Element {
    const { opacity, top, left } = this.getMenuStyle();
    const mountPoint = document.querySelector(`#${this.props.mountPoint}`);
    if (mountPoint) {
      const itemsToDisplay =
        this.state.filter.length > 0
          ? search(this.state.filter, this.state.items, {
              keySelector: (item: IMenuItem) => item.type,
            })
          : this.state.items;
      return ReactDOM.createPortal(
        <MenuContainer
          data-usage="hover-menu"
          opacity={opacity}
          top={top}
          left={left}
          ref={(element) => {
            if (element) {
              this.menuRef = element;
            }
          }}>
          <Menu>{itemsToDisplay.map((item) => this.renderMarkButton(item))}</Menu>
          {this.state.filter}
          {this.state.items.length === 0 && 'No Data'}
        </MenuContainer>,
        mountPoint,
      );
    }
    return <div />;
  }
}

export default connector(ContextMenu);
