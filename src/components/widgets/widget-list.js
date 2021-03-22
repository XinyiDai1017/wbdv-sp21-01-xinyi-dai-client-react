import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetService from "../../services/widget-service";
import './widget-list.css';

const WidgetList = (
    {
        myWidgets=[],
        createWidget,
        deleteWidget,
        updateWidget,
        findAllWidgetsForTopic,
        clearWidgets,
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    const [enableAddButton, setEnableAddButton] = useState(false);
    const [widget, setWidget] = useState({});

    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined"
            && lessonId !== 'undefined' && typeof lessonId !== "undefined"
            && topicId !== "undefined" && typeof topicId !== "undefined") {
            findAllWidgetsForTopic(topicId);
            setEnableAddButton(true)
        }else{
            setEnableAddButton(false)
            clearWidgets()
        }
    }, [topicId,findAllWidgetsForTopic, widget, setWidget, updateWidget]);

    return(
        <div>
            {enableAddButton &&
            <div align="right">
                <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x"></i>
            </div>
            }
            <ul className="list-group">
                {
                    myWidgets.map(_widget =>
                        <li key={_widget.id} className="list-group-item">
                            {
                                _widget.id === widget.id &&
                                <>
                                    <i onClick={()  => {
                                        updateWidget(widget.id, widget);
                                        setWidget({});
                                    }} className="fas fa-check float-right"></i>
                                    <i onClick={() => deleteWidget(_widget)} className="fas fa-trash float-right"></i>
                                </>

                            }
                            {
                                _widget.id !== widget.id &&
                                <i onClick={() => setWidget(_widget)} className="fas fa-cog float-right"></i>
                            }
                            {
                                _widget.id === widget.id &&
                                <select onChange={(e) => {
                                    const newWidget = {...widget};
                                    newWidget["type"] = e.target.value;
                                    updateWidget(newWidget.id, newWidget);
                                    setWidget(newWidget);
                                }} value={widget.type} className="form-control">
                                    <option value="HEADING">Heading</option>
                                    <option value="PARAGRAPH">Paragraph</option>
                                    <option value="VIDEO" disabled="disabled">Video</option>
                                    <option value="IMAGE" disabled="disabled">Image</option>
                                    <option value="LINK" disabled="disabled">Link</option>
                                    <option value="LIST" disabled="disabled">List</option>
                                    <option value="HTML" disabled="disabled">HTML</option>
                                </select>
                            }
                            {
                                _widget.type === "HEADING" &&
                                <HeadingWidget
                                    editing={_widget.id === widget.id}
                                    setWidget={setWidget}
                                    widget={_widget.id === widget.id? widget : _widget}
                                />
                            }
                            {
                                _widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    editing={_widget.id === widget.id}
                                    setWidget={setWidget}
                                    widget={_widget.id === widget.id? widget : _widget}
                                />
                            }

                        </li>
                    )
                }
            </ul>
        </div>
    );
}

const stpm = (state) => ({
    myWidgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => ({
    createWidget: (topicId) => {
        widgetService.createWidget(topicId,
            {type: 'HEADING', size: 1, text: 'New Widget'})
            .then(widgetFromServer => dispatch({
                type: 'CREATE_WIDGET',
                widget: widgetFromServer
            }));
    },
    deleteWidget: (widget) => {
        widgetService.deleteWidget(widget.id)
            .then(() => dispatch({
                type: 'DELETE_WIDGET',
                widgetToDelete: widget
            }))
    },
    updateWidget: (widgetId, widget) => {
        widgetService.updateWidget(widgetId, widget)
            .then(() => dispatch({
                type: 'UPDATE_WIDGET',
                widgetToUpdate: widget
            }))
    },
    findAllWidgetsForTopic: (topicId) => {
        widgetService.findWidgetsForTopic(topicId)
            .then(actualWidgets => dispatch({
                type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
                widgets: actualWidgets
            }));
    },
    clearWidgets: () => dispatch({
        type:"CLEAR_WIDGETS"
    }),
})

export default connect(stpm, dtpm)
(WidgetList);