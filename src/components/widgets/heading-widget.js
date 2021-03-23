import React, {useState} from 'react';

const HeadingWidget = (
    {
        widget,
        setWidget,
        editing,
    }) => {
    const [headingWidget, setHeadingWidget] = useState(widget);

    return(
        <div>
            {
                !editing &&
                <div>
                    {headingWidget.size === 1 && <h1>{headingWidget.text}</h1>}
                    {headingWidget.size === 2 && <h2>{headingWidget.text}</h2>}
                    {headingWidget.size === 3 && <h3>{headingWidget.text}</h3>}
                    {headingWidget.size === 4 && <h4>{headingWidget.text}</h4>}
                    {headingWidget.size === 5 && <h5>{headingWidget.text}</h5>}
                    {headingWidget.size === 6 && <h6>{headingWidget.text}</h6>}
                </div>
            }

            {
                editing &&
                <div>
                    <input
                        onChange={(e) => {
                            const newWidget = {...headingWidget};
                            newWidget["text"] = e.target.value;
                            setHeadingWidget(newWidget);
                            setWidget(newWidget);
                        }}
                        value={headingWidget.text}
                        className="form-control"
                    />
                    <select
                        onChange={(e) => {
                            const newWidget = {...headingWidget};
                            newWidget["size"] = parseInt(e.target.value);
                            setHeadingWidget(newWidget);
                            setWidget(newWidget);
                        }}
                        value={headingWidget.size}
                        className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
                </div>
            }
        </div>
    );
};

export default HeadingWidget;
