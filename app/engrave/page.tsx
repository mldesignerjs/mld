'use client'
import { engraveFonts, kindHandle, umbrellas } from '@/constants'
import { useState } from 'react'

export default function Home() {
    const [text, setText] = useState('Your name')
    const [fontSize, setFontSize] = useState('24')
    const [umbrella, setUmbrella] = useState(umbrellas[0])
    const [kindWood, setKindWood] = useState(umbrella.handle[0])
    function handleChangeContent(text: string) {
        setText(text)
    }
    function handleChangeFontSize(number: string) {
        setFontSize(number)
    }
    function handleChangeUmbrella(id: string) {
        const index = Number(id)
        const u = umbrellas.find((u) => u.id === index)
        setUmbrella(u)
        setKindWood(u?.handle[0])
    }
    function handleChangeKindWood(kind: string) {
        setKindWood(umbrella.handle.find((u) => u.value === kind))
    }

    return (
        <main className="p-24">
            <h2 className="text-center text-5xl py-10" style={engraveFonts[4].style}>
                Hãy chọn font, kích cỡ chữ để khắc tên lên tay cầm ô dù
            </h2>
            <div className="fixed top-1/2 right-0 rounded w-[300px] bg-white shadow p-5">
                <div className="flex items-center justify-center pb-6">
                    <label className="pr-6" htmlFor="">
                        Nội dung:
                    </label>
                    <input
                        type="text"
                        name=""
                        className="py-2 px-4 rounded w-[150px]"
                        placeholder="Nhập nội dung bạn muốn khắc"
                        onChange={(e) => handleChangeContent(e.target.value)}
                    />
                </div>
                <div className="flex items-center ">
                    <label className="pr-6" htmlFor="">
                        Kích cỡ:
                    </label>
                    <div>
                        <input
                            type="number"
                            name=""
                            className="py-2 px-4 rounded"
                            placeholder=""
                            value={fontSize}
                            max={50}
                            min={10}
                            onChange={(e) => handleChangeFontSize(e.target.value)}
                        />
                        <input
                            type="range"
                            name="vol"
                            className="py-2 rounded"
                            placeholder=""
                            value={fontSize}
                            min={10}
                            max={50}
                            onChange={(e) => handleChangeFontSize(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex items-center ">
                    <label className="pr-6" htmlFor="">
                        Loại ô:
                    </label>

                    <select
                        className="py-2 px-4 rounded"
                        id="floatingSelect"
                        value={umbrella.id}
                        onChange={(e) => handleChangeUmbrella(e.target.value)}
                    >
                        {umbrellas.map((umbrell) => (
                            <option key={umbrell.id} value={umbrell.id}>
                                {umbrell.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center ">
                    <label className="pr-6" htmlFor="">
                        Loại gỗ:
                    </label>

                    <select
                        className="py-2 px-4 rounded"
                        id="floatingSelect"
                        value={kindWood.value}
                        onChange={(e) => handleChangeKindWood(e.target.value)}
                    >
                        {umbrella.handle.map((handle) => (
                            <option key={handle.id} value={handle.value}>
                                {kindHandle.find((wood) => wood.value === handle.value)?.name}
                            </option>
                        ))}
                    </select>
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
                                backgroundImage: `url(${kindWood.urlImg})`,
                                backgroundSize: 'auto 100%',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <span
                                className={`engrave flex items-center justify-center whitespace-nowrap overflow-hidden text-center leading-normal ml-[3cm] h-[15mm] ${kindWood.value}`}
                                style={{width:  `${umbrella.sizeHandle}cm`}}
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
