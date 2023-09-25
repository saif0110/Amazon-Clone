import FooterBanner from "../Footer Banner/FooterBanner"
import FooterBelt from "../Footer Belt/FooterBelt"
import SignIn from "../SignIn"
const CombinedFooter = ()=>{
    return (
        <>
            <SignIn />
            <FooterBanner/>
            <FooterBelt />
        </>
    )
}

export default CombinedFooter