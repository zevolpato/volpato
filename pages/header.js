import Link from 'next/link'
import Pag2 from './pag2';


function Header() {
  return (
        <>   

        <p>Header</p>
        <Link href="./pag2">
        <a>Ir para página 2</a>
        </Link>

        <Link href="./pag3">
        <a>Ir para página 3</a>
        </Link>

        <Link href="">
        <a>Voltar para página inicial</a>
        </Link>



        </>
  )
}

export default Header;



