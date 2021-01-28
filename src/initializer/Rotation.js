import Initializer from './Initializer';
import { INITIALIZER_TYPE_ROTATION as type } from './types';

/**
 * Sets the starting rotation property for initialized particles.
 *
 */
export default class Rotation extends Initializer {
  /**
 /**
   * Constructs a Rotate behaviour instance.
   *
   * @param {number} x - X axis rotation
   * @param {number} y - Y axis rotation
   * @param {number} z - Z axis rotation
   */
  constructor(x, y, z) {
    super(type);

    this.reset.apply(x, y, z);
  }

  /**
   * Resets the initializer properties.
   * Clears all previously set zones and resets the zones according to args passed.
   *
   * @param {number} x - X axis rotation
   * @param {number} y - Y axis rotation
   * @param {number} z - Z axis rotation
   * @return void
   */
  reset(x, y, z) {
    this.rotation = { x, y, z };
  }

  /**
   * Creates a Position initializer from JSON.
   *
   * @param {object} json - The JSON to construct the instance from.
   * @param {string} json.zoneType - The type of zone to use for initial rotation
   * @return {Rotation}
   */
  static fromJSON(json) {
    const { x, y, z } = json;

    return new Rotation(x, y, z);
  }
}

/**
 * Sets the particle's initial rotation.
 *
 * @param {Particle} particle - the particle to initialize the property on
 * @return void
 */
Rotation.prototype.initialize = (function() {
  let rotation;

  return function(target) {
    rotation = this.rotation;
    target.rotation.x = rotation.x;
    target.rotation.y = rotation.y;
    target.rotation.z = rotation.z;
  };
})();
