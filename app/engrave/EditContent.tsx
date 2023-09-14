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
            <div className="flex items-center pb-2">
                <label className="pr-6" htmlFor="contentEngrave">
                    Nội dung:
                </label>
                <input
                    type="text"
                    value={props.text}
                    name="contentEngrave"
                    className="py-2 px-2 rounded w-[150px]"
                    placeholder="Nhập nội dung bạn muốn khắc"
                    onChange={(e) => props.onChangeContent(e.target.value)}
                />
            </div>
            <div className="flex items-center pb-2">
                <label className="pr-6" htmlFor="sizeEngrave">
                    Kích cỡ:
                </label>
                <div className="flex flex-wrap items-center">
                    <input
                        type="number"
                        name="sizeEngrave"
                        className="rounded w-[40px] focus:outline-none appearance-none"
                        placeholder=""
                        value={props.fontSize}
                        max={50}
                        min={10}
                        onChange={(e) => props.onChangeFontSize(e.target.value)}
                    />
                    <input
                        type="range"
                        name="sizeEngrave"
                        className="rounded"
                        placeholder=""
                        value={props.fontSize}
                        min={10}
                        max={50}
                        onChange={(e) => props.onChangeFontSize(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex items-center pb-2">
                <label className="pr-6" htmlFor="letterSpacing">
                    Khoảng cách chữ:
                </label>
                <div>
                    <input
                        type="number"
                        name="letterSpacing"
                        className="py-2 px-2 rounded"
                        placeholder=""
                        value={props.letterSpacing}
                        max={10}
                        min={0}
                        onChange={(e) => props.onChangeLetterSpacing(e.target.value)}
                    />
                    <input
                        type="range"
                        name="letterSpacing"
                        className="py-2 rounded"
                        placeholder=""
                        value={props.letterSpacing}
                        min={0}
                        max={10}
                        onChange={(e) => props.onChangeLetterSpacing(e.target.value)}
                    />
                </div>
            </div>
        </>
    )
}
