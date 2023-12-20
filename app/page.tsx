'use client'
import { phuam } from '@/constants'
import { useState } from 'react'

export default function Home() {
    const [nguyenAm, setNguyenAm] = useState<string>('')
    function handleNhapNguyenAm(value: string) {
        setNguyenAm(value)
    }
    return (
        <div className="px-24 pt-40">
            <input
                type="text"
                placeholder="Nhập text"
                className="p-5 border-2"
                onChange={(e) => handleNhapNguyenAm(e.target.value)}
            />
            <ul className="flex flex-wrap gap-5">
                {phuam.map((a) => (
                    <li key={a} className="text-3xl w-36">
                        {a}
                        {nguyenAm}
                    </li>
                ))}
            </ul>
        </div>
    )
}
