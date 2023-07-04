'use client'

import { engraveFonts } from '@/constants'
import { useState } from 'react'

export default function Home() {
    const [text, setText] = useState('Your name')
    const [fontSize, setFontSize] = useState('36')
    const [umbrellaSize, setUmbrellaSize] = useState('30')
    const [kindWood, setKindWood] = useState('CN')
    function handleChangeContent(text: string) {
        setText(text)
    }
    function handleChangeFontSize(number: string) {
        setFontSize(number)
    }
    function handleChangeUmbrellaSize(size: string) {
        setUmbrellaSize(size)
    }
    function handleChangeKindWood(kind: string) {
        setKindWood(kind)
    }

    return (
        <main className="p-24">
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
                </div>
                <div className="flex items-center ">
                    <label className="pr-6" htmlFor="">
                        Loại ô:
                    </label>

                    <select
                        className="py-2 px-4 rounded"
                        id="floatingSelect"
                        defaultValue="30"
                        onChange={(e) => handleChangeUmbrellaSize(e.target.value)}
                    >
                        <option value="23">23 inch Chagoi</option>
                        <option value="27">27 inch</option>
                        <option value="30">30 inch</option>
                    </select>
                </div>
                <div className="flex items-center ">
                    <label className="pr-6" htmlFor="">
                        Loại gỗ:
                    </label>

                    <select
                        className="py-2 px-4 rounded"
                        id="floatingSelect"
                        defaultValue="CN"
                        onChange={(e) => handleChangeKindWood(e.target.value)}
                    >
                        <option value="CN">CN</option>
                        <option value="TM">Trắc/Mun</option>
                    </select>
                </div>
            </div>
            <div className="flex w-full flex-wrap flex-col mt-6">
                      {
                        engraveFonts.map((font, key) => (
                            <div
                                key={key}
                                style={font.style}
                                className="w-auto flex items-center justify-center pr-6 pb-4"
                            >
                                <span className="flex items-center justify-center text-xl pr-6">{key + 1}</span>
                                <div
                                    className={`flex items-center w-full overflow-hidden text-center leading-normal ${umbrellaSize === '30' ? 'h-[8cm]': 'h-[6cm]'}`}
                                    style={{
                                        backgroundImage: `url(${umbrellaSize === '30' ? 'can-cn' : 'chagoi-den'}.jpg)`,
                                        backgroundSize: 'auto 100%',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                >
                                    <span
                                        className={`engrave flex items-center justify-center whitespace-nowrap overflow-hidden text-center leading-normal ml-[3cm] h-[15mm] ${umbrellaSize === '30' ? 'w-[12cm] cn' : 'w-[8cm] tm'}`}
                                        style={{
                                            fontSize: `${fontSize}px`,
                                        }}
                                    >
                                        {text}
                                    </span>
                                </div>
                            </div>
                        ))
                      }
            </div>
        </main>
    )
}
