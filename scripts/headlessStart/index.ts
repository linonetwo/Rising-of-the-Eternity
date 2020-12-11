import { container } from '@/services';
import { IElectronMainThreadService } from '@/services/Main';
import SERVICE_IDENTIFIER from '@/services/identifiers';

const main = container.get<IElectronMainThreadService>(SERVICE_IDENTIFIER.Main);
void main.init().then(() => main.cdda.printErrorLogToConsole());
