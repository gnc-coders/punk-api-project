import { Slider, Switch } from 'antd';

function SliderPH({ ph, setPh, phChecked, setPhChecked }) {

    const handleValueChange = (newPh) => {
        setPh(newPh)
    }

    const handleCheckedChange = (checked) => {
        setPhChecked(checked)
    }

    return (
        <>
            <div className="container">
                <div className="row my-5 mx-0 d-flex">
                    <div className="col-auto">
                        <Switch checked={phChecked} onChange={handleCheckedChange} />
                    </div>
                    <div className="col-auto">
                        <h5>PH</h5>
                    </div>
                    <div className="col-6 ms-3">
                        <Slider range disabled={!phChecked} defaultValue={ph} onChange={handleValueChange} step={0.1} min={0} max={7} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderPH
