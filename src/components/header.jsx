import { EditOutlined, FastBackwardOutlined, LeftOutlined, UploadOutlined } from "@ant-design/icons";
import '../styles/header.css'
export default function Header(){
return(
    <header className="header">
        <div    className="header__start">
        <LeftOutlined />

        </div>
        <div    className="header__end">
        <EditOutlined />
<UploadOutlined />
        </div>

    </header>
)
}