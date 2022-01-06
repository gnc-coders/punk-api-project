import { Slider, Switch, Typography, Row, Col } from 'antd';

function SliderSRM({ srm, setSrm, srmChecked, setSrmChecked }) {

    const { Title } = Typography;

    const handleValueChange = (newSrm) => {
        setSrm(newSrm);
    };

    const handleCheckedChange = (checked) => {
        setSrmChecked(checked);
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1">
                        <Switch checked={srmChecked} onChange={handleCheckedChange} />
                    </div>
                    <div className="col-md-1">
                        <Title level={3}>SRM</Title>
                    </div>
                    <div className="col-md-3">
                        <Slider disabled={!srmChecked} defaultValue={srm} onChange={handleValueChange} step={0.5} min={0} max={100} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderSRM
