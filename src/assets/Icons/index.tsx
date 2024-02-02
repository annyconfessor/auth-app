import {default as Facebook} from './Facebook.svg'
import { default as Github} from "./Gihub.svg"
import { default as Google } from './Google.svg'
import { default as Twitter } from './Twitter.svg'
import { default as ArrowUp } from './ArrowUp.png'
import { default as ArrowDown } from './ArrowDown.png'
import { default as ProfileUser } from './ProfileUser.png'
import { default as GroupChat } from './GroupChat.png'
import { default as Logout } from './Logout.png'

const icons = {
  facebook: {
    value: Facebook,
    href: "https://www.facebook.com"
  },
  github: {
    value: Github,
    href: "https://github.com/"
  },
  google: {
    value: Google,
    href: "https://www.google.com"
  },
  twitter: {
    value: Twitter,
    href: "https://www.twitter.com"
  },
  arrowUp: {
    value: ArrowUp
  },
  arrowDown: {
    value: ArrowDown
  },
  profileUser: {
    value: ProfileUser,
    href: "profile-user-page"
  },
  groupChat: {
    value: GroupChat,
    href: "group-chat-page"
  },
  logout: {
    value: Logout,
    href: "logout-page"
  }
}

export default icons