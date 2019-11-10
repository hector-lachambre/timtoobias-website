import { Injectable } from '@angular/core';

@Injectable()
export class SocialService {

  private id: string = 'timtoobias';

  private networks = {
    youtube: 'youtube.com',
    twitter: 'twitter.com',
    twitch: 'twitch.tv'
  }

  constructor() {}

  getYoutubeUrl() {
    return `https://${this.networks.youtube}/${this.id}?sub_confirmation=1`
  }

  getTwitterUrl() {
    return `https://${this.networks.twitter}/${this.id}`
  }

  getTwitchUrl() {
    return `https://${this.networks.twitch}/${this.id}`
  }
}
