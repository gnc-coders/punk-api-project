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
                <div className="row my-5 mx-0">
                    <div className="col-md-1">
                        <Switch checked={srmChecked} onChange={handleCheckedChange} />
                    </div>
                    <div className="col-md-1">
                        <h5>SRM</h5>
                    </div>
                    <div className="col-md-4 ms-5">
                        <Slider disabled={!srmChecked} defaultValue={srm} onChange={handleValueChange} step={0.5} min={0} max={100} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderSRM
