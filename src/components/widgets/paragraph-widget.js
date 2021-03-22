import React, {useState} from 'react';

const ParagraphWidget = (
    {
        widget,
        setWidget,
        editing,
    }) => {
    const [paragraphWidget, setParagraphWidget] = useState(widget);

    return(
        <div>
            {
                editing &&
                <textarea
                     onChange={(e) => {
                         const newWidget = {...paragraphWidget};
                         newWidget["text"] = e.target.value;
                         setParagraphWidget(newWidget);
                         setWidget(newWidget);
                     }}
                     value={paragraphWidget.text}
                     className="form-control">
                </textarea>
            }
            {
                !editing &&
                <p>
                    {paragraphWidget.text}
                </p>
            }

        </div>
    );
};

export default ParagraphWidget;