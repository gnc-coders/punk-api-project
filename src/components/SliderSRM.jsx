import { Slider, Switch } from 'antd';

function SliderSRM({ srm, setSrm, srmChecked, setSrmChecked }) {

    const handleValueChange = (newSrm) => {
        setSrm(newSrm)
    };

    const handleCheckedChange = (checked) => {
        setSrmChecked(checked)
    }

    return (
        <>
            <div className="container">
                <div className="row mx-0 d-flex">
                    <div className="col-auto">
                        <Switch checked={srmChecked} onChange={handleCheckedChange} />
                    </div>
                    <div className="col-auto">
                        <h5>SRM</h5>
                    </div>
                    <div className="col-6">
                        <Slider disabled={!srmChecked} defaultValue={srm} onChange={handleValueChange} step={0.5} min={0} max={100} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderSRM
