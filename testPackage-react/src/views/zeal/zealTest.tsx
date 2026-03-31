import {useObserverSize} from "dynamicformdjx-react";
import {Card} from "antd";
import {RefObject} from "react";

function App() {
    const zealHeight = '100vh'
    const outPadding = 20
    const {wrapRef, cardRef, restRef, tableHeight, ctxHeight} = useObserverSize();
    return <div className='container' ref={wrapRef}>
        <div
            className="zealCard"
            style={{
                height: `calc(${zealHeight} - ${outPadding * 2}px)`,
            }}
            ref={wrapRef}
        >
            <Card
                ref={cardRef as RefObject<HTMLDivElement>}
                title={<div className='title'>

                </div>}
                actions={[
                    <div className='footer'></div>
                ]}
                style={{height: "100%"}}
                styles={{
                    header: {
                        padding: '10px'
                    },
                    body: {
                        padding: '1px',
                        height: tableHeight + 'px',
                    },
                }}
            >
                <div className="content">

                </div>
            </Card>
            <div ref={restRef}></div>
        </div>
    </div>
}

export default App;