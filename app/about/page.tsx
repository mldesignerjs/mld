import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fawR from '@fortawesome/free-regular-svg-icons'
import * as fawS from '@fortawesome/free-solid-svg-icons'
import * as fawB from '@fortawesome/free-brands-svg-icons'

export default function About() {
    const fawBkeys = Object.keys(fawB)
    const fawBvalues = Object.values(fawB)
    const fawSkeys = Object.keys(fawS)
    const fawSvalues = Object.values(fawS)
    const fawRkeys = Object.keys(fawR)
    const fawRvalues = Object.values(fawR)
    return (
        <main className="p-24">
            <h2 className="text-center text-5xl py-10">About page</h2>

            {fawRvalues.map((aw, index) => (
                <FontAwesomeIcon key={index} icon={aw} />
            ))}
            <hr />
            {fawSvalues.map((aw, index) => (
                <FontAwesomeIcon key={index} icon={aw} />
            ))}
            <hr />
            {fawBvalues.map((aw, index) => (
                <FontAwesomeIcon key={index} icon={aw} />
            ))}
        </main>
    )
}
