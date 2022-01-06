import { Slider, Switch, Typography } from 'antd';

function SliderPH({ ph, setPh, phChecked, setPhChecked }) {

    const { Title } = Typography;

    const handleValueChange = (newPh) => {
        console.log(newPh)
        setPh(newPh);
    };

    const handleCheckedChange = (checked) => {
        setPhChecked(checked);
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1">
                        <Switch checked={phChecked} onChange={handleCheckedChange} />
                    </div>
                    <div className="col-md-1">
                        <Title level={3}>PH</Title>
                    </div>
                    <div className="col-md-3">
                        <Slider range disabled={!phChecked} defaultValue={ph} onChange={handleValueChange} step={0.1} min={0} max={7} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderPH
