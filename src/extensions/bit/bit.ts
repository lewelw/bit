import { Workspace } from '../../extensions/workspace';
import { Scope } from '../../scope';

export default class Bit {
  constructor(
    /**
     * Scope
     */
    readonly scope: Scope | undefined,

    /**
     * Workspace
     */
    readonly workspace: Workspace | undefined
  ) {}

  /**
   * bit's current version
   */
  get version() {
    return '1.0.0';
  }
}
