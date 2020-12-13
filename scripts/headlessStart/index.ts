import { container, Main } from '@/services';

const main = container.get(Main);
void main.init().then(() => main.cdda.printErrorLogToConsole());
