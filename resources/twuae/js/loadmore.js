import { lazyLoadImages, attachLoadMoreActions } from './helpers';
import { globalState } from './tw-global-state';

(function() {
  attachLoadMoreActions(globalState);
})();
