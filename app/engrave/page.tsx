'use client'
import { engraveFonts, kindHandle, umbrellas, handleO, umbrellaO } from '@/constants'
import { faCircleXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { EditContent } from './EditContent'

export default function Home() {
    const [lineNumber, setLineNumber] = useState<string>('1')
    const [lineHeight, setLineHeight] = useState<string>('0')
    const [currentUmbrella, setCurrentUmbrella] = useState<umbrellaO>(umbrellas[0])
    const [handle, setHandle] = useState<handleO>(umbrellas[0].handle[0])
    const [showEditMode, setShowEditMode] = useState<boolean>(true)

    const [text1, setText1] = useState<string>('Tên Của Bạn')
    const [fontSize1, setFontSize1] = useState<string>('28')
    const [letterSpacing1, setLetterSpacing1] = useState<string>('0')

    const [text2, setText2] = useState<string>('Tên Của Bạn')
    const [fontSize2, setFontSize2] = useState<string>('28')
    const [letterSpacing2, setLetterSpacing2] = useState<string>('0')

    function handleChangeLineNumber(value: string) {
        setLineNumber(value)
    }

    function handleChangeLineHeight(value: string) {
        setLineHeight(value)
    }

    function handleChangeContent1(value: string) {
        setText1(value)
    }

    function handleChangeFontSize1(value: string) {
        setFontSize1(value)
    }

    function handleChangeLetterSpacing1(value: string) {
        setLetterSpacing1(value)
    }

    function handleChangeContent2(value: string) {
        setText2(value)
    }

    function handleChangeFontSize2(value: string) {
        setFontSize2(value)
    }

    function handleChangeLetterSpacing2(value: string) {
        setLetterSpacing2(value)
    }

    function handleChangeUmbrella(value: string) {
        const index: number = Number(value)
        let nextUmbrella: any = umbrellas.find((umbrella) => umbrella.id === index)
        setCurrentUmbrella(nextUmbrella)
        setHandle(nextUmbrella.handle[0])
    }

    function handleChangeKindWood(value: string) {
        const nextHandle: any = currentUmbrella?.handle.find((umbrella) => umbrella.value === value)
        setHandle(nextHandle)
    }

    function handleShowEditMode() {
        setShowEditMode(!showEditMode)
    }

    return (
        <div className="lg:px-24 max-lg:px-4 lg:pt-40 max-lg:pt-10">
            <h2 className="text-center text-xl py-10" style={engraveFonts[10].style}>
                Hãy chọn font, kích cỡ chữ để khắc tên lên tay cầm ô dù
            </h2>
            <button
                className="fixed top-[18%] right-0 z-30 w-[50px] h-[50px] bg-white rounded border"
                onClick={handleShowEditMode}
            >
                {showEditMode ? <FontAwesomeIcon icon={faCircleXmark} /> : <FontAwesomeIcon icon={faPenToSquare} />}
            </button>
            <div
                className="fixed top-[18%] right-0 z-20 overflow-y-scroll transition-all rounded bg-white shadow border max-h-[50%]"
                style={{ width: `${showEditMode ? '350px' : '0'}` }}
            >
                <div className="p-4">
                    <div className="flex items-center">
                        <p className="pr-6">Số dòng chữ:</p>
                        <div className="pr-5">
                            <input
                                className=""
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                value="1"
                                checked={lineNumber === '1'}
                                onChange={(e) => handleChangeLineNumber(e.target.value)}
                            />
                            <label className="pl-2" htmlFor="flexRadioDefault1">
                                1 dòng
                            </label>
                        </div>
                        <div className="">
                            <input
                                className=""
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                value="2"
                                checked={lineNumber === '2'}
                                onChange={(e) => handleChangeLineNumber(e.target.value)}
                            />
                            <label className="pl-2" htmlFor="flexRadioDefault2">
                                2 dòng
                            </label>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <select
                            className="py-2 mr-4 rounded"
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
                        <select
                            className="py-2 rounded"
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
                    <div className="border-t-gray-300 border-t">
                        {lineNumber === '2' && <p className="font-bold text-center pt-2 ">Dòng 1</p>}
                        <EditContent
                            text={text1}
                            fontSize={fontSize1}
                            letterSpacing={letterSpacing1}
                            onChangeContent={handleChangeContent1}
                            onChangeFontSize={handleChangeFontSize1}
                            onChangeLetterSpacing={handleChangeLetterSpacing1}
                        />
                    </div>
                    {lineNumber === '2' && (
                        <>
                            <div className="border-t-gray-300 border-t">
                                <p className="font-bold text-center pt-2 ">Dòng 2</p>
                                <EditContent
                                    text={text2}
                                    fontSize={fontSize2}
                                    letterSpacing={letterSpacing2}
                                    onChangeContent={handleChangeContent2}
                                    onChangeFontSize={handleChangeFontSize2}
                                    onChangeLetterSpacing={handleChangeLetterSpacing2}
                                />
                            </div>
                            <div className="border-t-gray-300 border-t">
                                <div className="flex items-center pb-2">
                                    <label className="pr-6" htmlFor="letterSpacing">
                                        Khoảng cách 2 dòng:
                                    </label>
                                    <div>
                                        <input
                                            type="number"
                                            name="letterSpacing"
                                            className="py-2 px-2 rounded"
                                            placeholder=""
                                            value={lineHeight}
                                            min={-20}
                                            max={20}
                                            onChange={(e) => handleChangeLineHeight(e.target.value)}
                                        />
                                        <input
                                            type="range"
                                            name="letterSpacing"
                                            className="py-2 rounded"
                                            placeholder=""
                                            value={lineHeight}
                                            min={-20}
                                            max={20}
                                            onChange={(e) => handleChangeLineHeight(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="mt-6">
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
                                <div className="flex flex-col justify-center absolute top-1/2 -translate-y-1/2 origin-left max-sm:scale-50 max-lg:scale-75 max-sm:left-[15mm] max-lg:left-[22.5mm] lg:left-[3cm] whitespace-nowrap overflow-hidden text-center h-[15mm]">
                                    <span
                                        className={`engrave leading-none block ${handle.value}`}
                                        style={{
                                            width: `${currentUmbrella.sizeHandle}cm`,
                                            letterSpacing: `${letterSpacing1}px`,
                                            fontSize: `${fontSize1}pt`,
                                        }}
                                    >
                                        {text1}
                                    </span>
                                    {lineNumber === '2' && (
                                        <span
                                            className={`engrave leading-none block ${handle.value}`}
                                            style={{
                                                width: `${currentUmbrella.sizeHandle}cm`,
                                                letterSpacing: `${letterSpacing2}px`,
                                                fontSize: `${fontSize2}pt`,
                                                marginTop: `${lineHeight}px`,
                                            }}
                                        >
                                            {text2}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
