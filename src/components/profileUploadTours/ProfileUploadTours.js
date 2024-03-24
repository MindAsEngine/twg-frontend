import '../profileSection/style.scss'
import UploadIcon from '../../img/upload.svg'

export default function ProfileUploadTours() {
    return (
        <div className="profilesection">
            <p className="profilesection__header">Загрузить туры с помощью Excel</p>
            <label className="profilesection__fileupload">
                <input type="file" alt="" accept=".xls,.xlsx" />
                <img src={UploadIcon} />
                Добавить файл
            </label>
        </div>
    )
}