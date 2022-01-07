import { Slider, Switch} from 'antd';

function SliderPH({ ph, setPh, phChecked, setPhChecked }) {

    const handleValueChange = (newPh) => {
        console.log(newPh)
        setPh(newPh);
    };

    const handleCheckedChange = (checked) => {
        setPhChecked(checked);
    };

    return (
        <>
           
            <div className="container">
                <div className="row my-5 mx-0">
                    <div className="col-md-1">
                        <Switch checked={phChecked} onChange={handleCheckedChange} />
                    </div>
                    <div className="col-md-1">
                        <h5>PH</h5>
                    </div>
                    <div className="col-md-4 ms-5">
                        <Slider range disabled={!phChecked} defaultValue={ph} onChange={handleValueChange} step={0.1} min={0} max={7} />
                    </div>
                </div>
            </div>

        </>

    )
}

export default SliderPH
