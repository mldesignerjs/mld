export interface IEditContentProps {
    text: string
    fontSize: string
    letterSpacing: string
    onChangeContent: Function
    onChangeFontSize: Function
    onChangeLetterSpacing: Function
}

export function EditContent(props: IEditContentProps) {
    return (
        <>
            <div className="flex items-center py-2">
                {/* <label className="pr-6" htmlFor="contentEngrave">
                    Nội dung:
                </label> */}
                <input
                    type="text"
                    name="contentEngrave"
                    className="w-full py-2 px-2 rounded border bg-gray-100 text-main font-bold"
                    placeholder="Nhập nội dung bạn muốn khắc"
                    onChange={(e) => props.onChangeContent(e.target.value)}
                />
            </div>
            <div className="py-2 relative">
                <label className="block" htmlFor="sizeEngrave">
                    Kích cỡ:
                </label>
                <span className="font-bold text-main absolute left-1/2 -translate-x-1/2">{props.fontSize}</span>
                <input
                    type="range"
                    name="sizeEngrave"
                    className="rounded w-full mt-6"
                    placeholder=""
                    value={props.fontSize}
                    min={10}
                    max={50}
                    onChange={(e) => props.onChangeFontSize(e.target.value)}
                />
            </div>
            <div className="py-2 relative">
                <label className="block" htmlFor="letterSpacing">
                    Khoảng cách chữ:
                </label>
                <span className="font-bold text-main absolute left-1/2 -translate-x-1/2">{props.letterSpacing}</span>

                <input
                    type="range"
                    name="letterSpacing"
                    className="rounded w-full mt-6"
                    placeholder=""
                    value={props.letterSpacing}
                    min={0}
                    max={10}
                    onChange={(e) => props.onChangeLetterSpacing(e.target.value)}
                />
            </div>
        </>
    )
}
