import { TranslinkS1HeroSection } from '../sections/TranslinkS1HeroSection';
import { TranslinkS1Footer } from './TranslinkS1Footer';
import { TranslinkTelemetryButton } from '../../components/TranslinkTelemetryButton';

export class TranslinkS1MainContent {
    mount(parent: HTMLElement): void {
        const main = document.createElement('main');
        main.className =
            'w-[var(--content-width)] flex-none flex flex-col overflow-visible shrink-0 relative z-10';

        new TranslinkS1HeroSection().mount(main);

        const telemetryWrapper = document.createElement('div');
        telemetryWrapper.id = 's1-telemetry-mount';
        telemetryWrapper.className = 'absolute bottom-8 left-0 z-30';
        main.appendChild(telemetryWrapper);

        new TranslinkTelemetryButton('s1', 'TELEMETRY_S1').mount(telemetryWrapper);

        new TranslinkS1Footer().mount(main);

        parent.appendChild(main);
    }
}
