import { Slider } from 'antd';
import { useEffect, useState } from "react";
import API_URL from '../data/api';

function VolumeButton({ setBaseUrl, resetButton, setResetButton }) {

    useEffect(() => {
        if (resetButton) {
            setNoneButton(true)
            setGtButton(false)
            setLtButton(false)
            setResetButton(false)
        }

    }, [resetButton])

    const [volume, setVolume] = useState('30')

    const [noneButton, setNoneButton] = useState(true)
    const [gtButton, setGtButton] = useState(false)
    const [ltButton, setLtButton] = useState(false)

    if (noneButton) {
        setBaseUrl(`${API_URL}`)
    } else if (gtButton) {
        setBaseUrl(`${API_URL}&abv_gt=${volume}`)
    } else {
        setBaseUrl(`${API_URL}&abv_lt=${volume}`)
    }

    function none() {
        setNoneButton(true)
        setGtButton(false)
        setLtButton(false)
    }

    function greaterThan() {
        setNoneButton(false)
        setGtButton(true)
        setLtButton(false)
    }

    function lowerThan() {
        setNoneButton(false)
        setGtButton(false)
        setLtButton(true)
    }

    function handleValueChange(newVolume) {
        setVolume(newVolume)
    }

    return (
        <>
            <div className="container">
                <div className="row my-5 mx-0">
                    <div className="col-xl-2 col-lg-12">
                        <h5>Alcohol by Volume</h5>
                    </div>
                    <div className="col-xl-4 col-lg-12">
                        <button type="button" className={`${noneButton ? "btn-primary" : "btn-outline-primary"} btn ms-4`} onClick={none}>None</button>
                        <button type="button" className={`${gtButton ? "btn-primary" : "btn-outline-primary"} btn ms-2`} onClick={greaterThan}>Greater Than</button>
                        <button type="button" className={`${ltButton ? "btn-primary" : "btn-outline-primary"} btn ms-2`} onClick={lowerThan}>Lower Than</button>
                    </div>
                    <div className="col-xl-4 col-lg-8">
                        <Slider defaultValue={30} min={0} max={100} disabled={noneButton} step={0.1} onChange={handleValueChange} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default VolumeButton
