import Link from 'next/link'
export default function Charts(){
    return(
        <div className="main_charts">
            <h1>Wykresy</h1>
            <Link href="/first-charts"><a>Udział eksportu wyrobów wysokiej techniki w eksporcie ogółem</a></Link>
            <Link href="/second-charts"><a>Pojemność obiektów małej retencji wodnej</a></Link>
            <Link href="#"><a>Więcej wkrótce...</a></Link>
        </div>
    )
}