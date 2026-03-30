import {Button, message} from "antd";
import {ReactNode, useEffect, useRef} from "react";
import {
    AdPopupModal,
    adPopupModalRef,
    AdZealCard, AdZealTablePaginationControl,
    AdZealTableSearch, adZealTableSearchRef, useDecorateForm
} from "dynamicformdjx-react/antd";
import {useLocation} from "react-router";
import {getStrUrl} from "@/utils/tools.ts";
import {usePagination, useWindowSize} from "dynamicformdjx-react";
import {alertResult} from "@/utils/link.ts";

function PopupModal() {
    const modalRef = useRef<adPopupModalRef>(null);

    return (
        <div>
            <Button onClick={() => modalRef.current?.toggle(true)}>打开弹窗</Button>

            <AdPopupModal
                ref={modalRef}
                title="测试弹窗"
                draggable
                onCancel={() => {
                    console.log("cancel");
                    return true;
                }}
                onSubmit={async () => {
                    return await new Promise(resolve => setTimeout(() => resolve(true), 2000));
                }}
            >
                <div>这里是弹窗内容</div>
            </AdPopupModal>
        </div>
    );
}

function ZealCard({pad}:{pad:number}) {
    return <AdZealCard
        outPadding={pad}
        title="Zeal Card"
        footer={({width}) => <div>windows width: {width}</div>}
        searchForm={() => <></>}
        controlBtn={() => <Button size='small' color={'green'} variant={'dashed'}>New</Button>}
    >
        {({tableHeight, isMobile}) => (<div>
            tableHeight:{tableHeight},isMobile:{`${isMobile}`}
        </div>)}
    </AdZealCard>
}

function ZealTableSearch() {
    type RowProps = {
        name: string
        age: string
        address: string
    }
    const {isMobile} = useWindowSize()
    const searchRef = useRef<adZealTableSearchRef<RowProps>>(null)
    const searchFormItems = useDecorateForm<RowProps>([
        {
            key: "name",
            label: "Name",
        },
        {
            key: "age",
            label: "Age",
        },
        {
            key: "address",
            label: "Address",
        },
    ].map(it => ({
        value: null,
        allowClear: true,
        renderType: 'renderInput',
        span: 8,
        ...it,
    })) as any[])
    const onSearch = (params: any) => {
        console.log('search params:', params)
    }

    const onReset = () => {
        console.log('reset')
    }
    return <div>
        <AdZealTableSearch<RowProps>
            ref={searchRef}
            title={'Search Params'}
            isMobile={isMobile}
            searchItemsState={searchFormItems}
            onSearch={onSearch}
            onReset={onReset}
        />
        <Button size='small' onClick={() => {
            alertResult(searchRef.current?.getParams())
        }}>Search (Ref Func)</Button>
    </div>
}

function ZealTablePaginationControl() {
    const [messageApi, contextHolder] = message.useMessage();
    const {isMobile} = useWindowSize()
    const paginationModal = usePagination(fetchData)

    function fetchData() {
        const {pagination} = paginationModal
        console.log(pagination.pageNo, pagination.pageSize)
    }

    useEffect(() => {
        paginationModal.setTotal(52)
    }, [])
    return (<div>
        {contextHolder}
        <AdZealTablePaginationControl
            prefix={({total}) => isMobile ? null : <span>Total {total}</span>}
            isMobile={isMobile}
            pagination={paginationModal.pagination}
            onChange={(pn, ps) => {
                messageApi.info(JSON.stringify({
                    pageNo: pn,
                    pageSize: ps,
                }, null, 2))
            }}
        />
    </div>)
}

const ZealComponents = () => {
    const route = useLocation()
    const pad=getStrUrl(route.search, 'hideMenu')==='true'?15:38
    const render = (type: string): ReactNode => {
        switch (type) {
            case 'modal':
                return (<PopupModal/>)
            case 'search':
                return (<ZealTableSearch/>)
            case 'page':
                return (<ZealTablePaginationControl/>)
            default:
                return <ZealCard pad={pad}/>
        }
    }
    return (<div className='zealComponetns'>
        {render(getStrUrl(route.search, 'zType'))}
    </div>)
}
export default ZealComponents;