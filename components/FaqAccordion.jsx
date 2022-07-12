import { useState, useRef } from "react"
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'

const FaqAccordion = ({ title, content }) => {
  const [isOpened, setOpened] = useState(false)
  const [height, setHeight] = useState("0px")
  const contentElement = useRef(null)

  const HandleOpening = () => {
    setOpened(!isOpened)
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px")
  }
  return (
    <div onClick={HandleOpening} className="my-3">
      <div className={"bg-orange-100 p-4 flex justify-between font-medium"}>
        <h4 className="trispace uppercase">{title}</h4>
        {isOpened ? <FiChevronRight /> : <FiChevronDown />}
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className="bg-orange-100 overflow-hidden transition-all duration-200"
      >
        <p className="p-4">{content}</p>
      </div>
    </div>
  )
}

export default FaqAccordion
