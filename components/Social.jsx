import {FiTwitter, FiMail} from 'react-icons/fi'
import {FaDiscord} from 'react-icons/fa'

const Social = () => {
  return (
    <div className="flex rounded-md items-center p-2 md:p-3 gap-3 md:gap-5 md:text-xl bg-orange-100">
      <a href="https://twitter.com/powernft_?s=11&t=e7_5-wF0kc-KwbiA0WcHkA">
        <FiTwitter />
      </a>
      <a href="https://discord.gg/cA7RB7Fm">
        <FaDiscord />
      </a>
      <a href="mailto:powernft.io@gmail.com">
        <FiMail />
      </a>
    </div>
  )
}

export default Social