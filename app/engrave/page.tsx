'use client'
import { engraveFonts, kindHandle, umbrellas, handleO, umbrellaO } from '@/constants'
import { faCircleXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function Home() {
    const [text, setText] = useState<string>('Your name')
    const [fontSize, setFontSize] = useState<string>('28')
    const [letterSpacing, setLetterSpacing] = useState<string>('0')
    const [currentUmbrella, setCurrentUmbrella] = useState<umbrellaO>(umbrellas[0])
    const [handle, setHandle] = useState<handleO>(umbrellas[0].handle[0])
    const [showEditMode, setShowEditMode] = useState<boolean>(true)

    function handleChangeContent(text: string) {
        setText(text)
    }

    function handleChangeFontSize(number: string) {
        setFontSize(number)
    }

    function handleChangeLetterSpacing(number: string) {
        setLetterSpacing(number)
    }

    function handleChangeUmbrella(id: string) {
        const index: number = Number(id)
        let nextUmbrella: any = umbrellas.find((umbrella) => umbrella.id === index)
        setCurrentUmbrella(nextUmbrella)
        setHandle(nextUmbrella.handle[0])
    }

    function handleChangeKindWood(kind: string) {
        const nextHandle: any = currentUmbrella?.handle.find((umbrella) => umbrella.value === kind)
        setHandle(nextHandle)
    }

    function handleShowEditMode() {
        setShowEditMode(!showEditMode)
    }

    return (
        <div className=" lg:px-24 max-lg:px-4 lg:pt-40 max-lg:pt-10">
            <h2 className="text-center text-5xl py-10" style={engraveFonts[9].style}>
                Hãy chọn font, kích cỡ chữ để khắc tên lên tay cầm ô dù
            </h2>
            <button
                className="fixed top-1/2 -translate-y-1/2 right-0 z-30 w-[50px] h-[50px] bg-white rounded border"
                onClick={handleShowEditMode}
            >
                {showEditMode ? <FontAwesomeIcon icon={faCircleXmark} /> : <FontAwesomeIcon icon={faPenToSquare} />}
            </button>
            <div
                className="fixed top-1/2 -translate-y-1/2 right-0 z-20 overflow-hidden transition-all rounded bg-white shadow border"
                style={{ width: `${showEditMode ? '350px' : '0'}` }}
            >
                <div className="p-5">
                    <div className="flex items-center pb-4">
                        <label className="pr-6" htmlFor="contentEngrave">
                            Nội dung:
                        </label>
                        <input
                            type="text"
                            name="contentEngrave"
                            id="contentEngrave"
                            className="py-2 px-4 rounded w-[150px]"
                            placeholder="Nhập nội dung bạn muốn khắc"
                            onChange={(e) => handleChangeContent(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center pb-4">
                        <label className="pr-6" htmlFor="sizeEngrave">
                            Kích cỡ:
                        </label>
                        <div>
                            <input
                                type="number"
                                name="sizeEngrave"
                                id="sizeEngrave"
                                className="py-2 px-4 rounded"
                                placeholder=""
                                value={fontSize}
                                max={50}
                                min={10}
                                onChange={(e) => handleChangeFontSize(e.target.value)}
                            />
                            <input
                                type="range"
                                name="sizeEngrave"
                                className="py-2 rounded"
                                placeholder=""
                                value={fontSize}
                                min={10}
                                max={50}
                                onChange={(e) => handleChangeFontSize(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center pb-4">
                        <label className="pr-6" htmlFor="letterSpacing">
                            Khoảng cách chữ:
                        </label>
                        <div>
                            <input
                                type="number"
                                name="letterSpacing"
                                id="letterSpacing"
                                className="py-2 px-4 rounded"
                                placeholder=""
                                value={letterSpacing}
                                max={10}
                                min={0}
                                onChange={(e) => handleChangeLetterSpacing(e.target.value)}
                            />
                            <input
                                type="range"
                                name="letterSpacing"
                                className="py-2 rounded"
                                placeholder=""
                                value={letterSpacing}
                                min={0}
                                max={10}
                                onChange={(e) => handleChangeLetterSpacing(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center pb-4">
                        <label className="pr-6" htmlFor="umbrella">
                            Loại ô:
                        </label>

                        <select
                            className="py-2 px-4 rounded"
                            id="umbrella"
                            name="umbrella"
                            value={currentUmbrella.id}
                            onChange={(e) => handleChangeUmbrella(e.target.value)}
                        >
                            {umbrellas.map((umbrella) => (
                                <option key={umbrella.id} value={umbrella.id}>
                                    {umbrella.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center">
                        <label className="pr-6" htmlFor="handle">
                            Loại gỗ:
                        </label>

                        <select
                            className="py-2 px-4 rounded"
                            id="handle"
                            name="handle"
                            value={handle?.value}
                            onChange={(e) => handleChangeKindWood(e.target.value)}
                        >
                            {currentUmbrella.handle.map((handle) => (
                                <option key={handle.id} value={handle.value}>
                                    {kindHandle.find((wood) => wood.value === handle.value)?.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div
                className="mt-6"
                style={{
                    fontSize: `${fontSize}px`,
                }}
            >
                {engraveFonts.map((font, key) => (
                    <div key={key} style={font.style} className="w-full overflow-hidden justify-center pb-6 relative">
                        <span className="max-sm:text-sm text-xl absolute max-sm:top-2 max-sm:left-2 top-4 left-4 z-10 flex max-sm:w-5 max-sm:h-5 w-10 h-10 rounded-full bg-main text-white justify-center items-center">
                            {key + 1}
                        </span>
                        <div className="flex items-center w-full overflow-hidden text-center leading-normal">
                            <div className="relative">
                                <img
                                    src={handle.urlImg}
                                    alt=""
                                    className="max-sm:h-[35mm] md:h-[52.5mm] lg:h-[7cm] w-max min-w-max"
                                />
                                <span
                                    className={`engrave absolute top-1/2 -translate-y-1/2 origin-left max-sm:scale-50 max-lg:scale-75 max-sm:left-[15mm] max-lg:left-[22.5mm] lg:left-[3cm] whitespace-nowrap overflow-hidden text-center leading-[15mm] h-[15mm] ${handle.value}`}
                                    style={{
                                        width: `${currentUmbrella.sizeHandle}cm`,
                                        letterSpacing: `${letterSpacing}px`,
                                    }}
                                >
                                    {text}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
