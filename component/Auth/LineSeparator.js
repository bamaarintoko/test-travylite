import React from 'react'
export default function () {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: 30, marginTop: 24, marginBottom: 24 }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', }}>
                <div style={{ display: 'flex', flex: 1, height: 1, backgroundColor: "rgba(0, 0, 0, 0.2)" }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 16, paddingRight: 16 }}>
                <span style={{ fontFamily: 'Roboto', fontSize: 14, color: 'rgba(0, 0, 0, 0.4)' }}>Atau</span>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', }}>
                <div style={{ display: 'flex', flex: 1, height: 1, backgroundColor: "rgba(0, 0, 0, 0.2)" }} />
            </div>
        </div>
    )
}