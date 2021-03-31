import React, {useState} from 'react'

const ImageWidget = (
    {
        widget,
        setWidget,
        editing
    }) => {
    const [imageWidget, setImageWidget] = useState(widget);

    return (
        <div>
            <h2>Image Widget</h2>
            {
                !editing &&
                <img width={widget.width} height={widget.height} src={widget.src}/>
            }
            {
                editing &&
                <div>
                    Image URL
                    <input
                        onChange={(e) => {
                            const newWidget = {...imageWidget};
                            newWidget["text"] = e.target.value;
                            setImageWidget(newWidget);
                            setWidget(newWidget);
                        }}
                        value={imageWidget.url} className="form-control"/>
                    Image width
                    <input
                        onChange={(e) => {
                            const newWidget = {...imageWidget};
                            newWidget["text"] = e.target.value;
                            setImageWidget(newWidget);
                            setWidget(newWidget);
                        }}
                        value={imageWidget.width} className="form-control"/>
                    Image height
                    <input
                        onChange={(e) => {
                            const newWidget = {...imageWidget};
                            newWidget["text"] = e.target.value;
                            setImageWidget(newWidget);
                            setWidget(newWidget);
                        }}
                        value={imageWidget.height} className="form-control"/>
                </div>
            }
        </div>
    )
}

export default ImageWidget