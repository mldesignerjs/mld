'use client'
import { engraveFonts, kindHandle, umbrellas, handleO, umbrellaO } from '@/constants'
import { faCircleXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function Home() {
    const [text, setText] = useState<string>('Your name')
    const [fontSize, setFontSize] = useState<string>('24')
    const [currentUmbrella, setCurrentUmbrella] = useState<umbrellaO>(umbrellas[0])
    const [handle, setHandle] = useState<handleO>(umbrellas[0].handle[0])
    const [showEditMode, setShowEditMode] = useState<boolean>(true)

    function handleChangeContent(text: string) {
        setText(text)
    }

    function handleChangeFontSize(number: string) {
        setFontSize(number)
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
        <main className=" lg:px-24 max-lg:px-4 lg:pt-40 max-lg:pt-10">
            <h2 className="text-center text-5xl py-10" style={engraveFonts[4].style}>
                Hãy chọn font, kích cỡ chữ để khắc tên lên tay cầm ô dù
            </h2>
            <button
                className="fixed top-1/2 -translate-y-1/2 right-0 z-30 w-[50px] h-[50px] bg-white rounded border"
                onClick={handleShowEditMode}
            >
                {showEditMode ? <FontAwesomeIcon icon={faCircleXmark} /> : <FontAwesomeIcon icon={faPenToSquare} />}
            </button>
            <div
                className="fixed top-1/2 -translate-y-1/2 right-0 overflow-hidden transition-all rounded bg-white shadow border"
                style={{
                    width: `${showEditMode ? '350px' : '0'}`,
                    // height: `${showEditMode ? 'fit-content' : '0'}`,
                }}
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
                className="flex w-full flex-wrap flex-col mt-6"
                style={{
                    fontSize: `${fontSize}px`,
                }}
            >
                {engraveFonts.map((font, key) => (
                    <div key={key} style={font.style} className="w-auto flex items-center justify-center pr-6 pb-4">
                        <span className="flex items-center justify-center text-xl pr-6">{key + 1}</span>
                        <div
                            className="flex items-center w-full overflow-hidden text-center leading-normal h-[7cm]"
                            style={{
                                backgroundImage: `url(${handle.urlImg})`,
                                backgroundSize: 'auto 100%',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <span
                                className={`engrave flex items-center justify-center whitespace-nowrap overflow-hidden text-center leading-normal ml-[3cm] h-[15mm] ${handle.value}`}
                                style={{ width: `${currentUmbrella.sizeHandle}cm` }}
                            >
                                {text}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}
