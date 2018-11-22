import BaseRender from './BaseRender';
import { Vector3 } from 'three';

export default class PointsRender extends BaseRender {
  constructor(ps) {
    super();

    this.points = ps;
    this.name = 'PointsRender';
  }

  onProtonUpdate() {}

  onParticleCreated(particle) {
    if (!particle.target) {
      particle.target = new Vector3();
    }

    particle.target.copy(particle.p);
    this.points.geometry.vertices.push(particle.target);
  }

  onParticleUpdate(particle) {
    if (particle.target) {
      particle.target.copy(particle.p);
    }
  }

  onParticleDead(particle) {
    if (particle.target) {
      var index = this.points.geometry.vertices.indexOf(particle.target);

      if (index > -1) this.points.geometry.vertices.splice(index, 1);

      particle.target = null;
    }
  }
}
