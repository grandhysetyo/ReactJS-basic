import React from 'react'

const makanans = [
    {
        nama: "Soto",
        harga: 10000
    },
    {
        nama: "Bakso",
        harga: 15000
    },
    {
        nama: "Sate",
        harga: 16000
    },
    {
        nama: "Gulai",
        harga: 12000
    },
    {
        nama: "Pecel",
        harga: 15000
    },
    {
        nama: "Nasgor",
        harga: 40000
    },
]
const total_harga = makanans.reduce((total, makanan)=>{
    return total + makanan.harga
},0)
const LoopES6 = () => {
    return (
        <div>
            <h3>List Makanan Map</h3>
            <ul>
                {makanans.map((makanan, index)=> 
                    <li>{index+1} - {makanan.nama} | Harga: {makanan.harga}</li>
                )}                
            </ul>
            <h3>List Makanan Filter</h3>
            <ul>
                {makanans.filter((makanan)=> makanan.harga>15000)
                .map((makan)=>
                <li>{makan.nama}</li>
                )}
                
            </ul>
            
            <h4>Total: {total_harga}</h4>
            
            
        </div>
    )
}

export default LoopES6
