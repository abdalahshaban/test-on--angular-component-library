
import { SidePanelPosition } from './side-panel-location.enum';
import { SidePanelState } from './side-panel-state.enum';

export class DashboardLayoutConfiguration {
    constructor(
        public sidePanelPosition: SidePanelPosition,
        public initialSidePanelState: SidePanelState
    ) { }
}