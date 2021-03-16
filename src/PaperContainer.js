import React, {useEffect} from 'react';
import paper from 'paper';

const CANVAS_ID = 'paint-canvas';

const PaperContainer = () => {
    let path;
    const pathTool = new paper.Tool();
    pathTool.maxDistance = 5;

    useEffect(() => {
        paper.setup(CANVAS_ID);

        paper.view.onResize = ({size, delta}) => {
            const scale = size.width / (size.width - delta.width);
            paper.project.layers.forEach((each) => {
                each.scale(scale);
                each.position.x *= scale;
                each.position.y *= scale;
            });
        };
    }, []);

    pathTool.onMouseDown = () => {
        if (path) {
            path.selected = false;
        }
        path = new paper.Path();
        path.strokeColor = 'black';
    };

    pathTool.onMouseDrag = (event) => {
        path.add(event.point);
    };

    pathTool.onMouseUp = () => {
        path.smooth();
    };

    return (
        <div className="paper-container">
            <div className="paper-wrapper">
                <canvas
                    data-paper-resize="true"
                    resize="true"
                    id={CANVAS_ID}
                    keepalive="false"
                    data-paper-keepalive="false"
                />
            </div>
        </div>
    );
};

export default PaperContainer;
