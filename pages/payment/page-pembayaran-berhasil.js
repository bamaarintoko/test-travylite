import React from "react";
import Contain from "../../component/Container";
import Content from "../../component/Content";
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import withAuth from "../../component/withAuth";
function PagePembayaranBerhasil() {
    return (
        <Contain>
            <Content>
                <div style={{ display: "flex", flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <CheckCircleTwoToneIcon sx={{ color: '#63B338', fontSize: 200 }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>

                        <span style={{ fontSize: 17.5, fontFamily: 'Roboto', fontWeight: '500', textAlign: 'center' }}> Terima Kasih Pembayaran</span>
                        <span style={{ fontSize: 17.5, fontFamily: 'Roboto', fontWeight: '500', textAlign: 'center' }}>Anda Berhasil</span>
                    </div>
                </div>
            </Content>
        </Contain>
    )
}

export default withAuth(PagePembayaranBerhasil)