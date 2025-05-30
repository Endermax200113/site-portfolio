import Footer from '@components/footer/Footer'
import Header from '@components/header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

// DONE Хедер вместе Representation переделаны

// * Header
// [x] Убрать полностью лишние компоненты
// [x] Оставить размер Header как у бывшего Navbar'а
// [x] Переделать Navbar и оставить внутри Header'а. Navbar должен содержать следующее: nav>li
// [x] Добавить компонент Logo. Он обязательно должен быть <li>
// [x] Добавить компонент Menu. Внутри компонента должен возвращать <>MenuItem*$</>
// [x] Добавить компонент MenuItem, который должен быть внутри Menu

// * Representation
// [x] Убрать лишние компоненты Representation
// [x] Изменить высоту Representation как у бывшего размера Header'а
// [x] Добавить компонент Demonstration внутри Representation
// [x] Удалить компонент Info и добавить компонент Information внутри Demonstration
// [x] Добавить компонент InformationText внутри Information
// [x] Добавить компонент LabelHello в папке @ui/text/label/<...> внутри InformationText
// [x] Добавить компонент LabelWho в этой же папке и внутри InformationText
// [x] Добавить компонент LabelProfession в той же папке и внутри InformationText
// [x] Компонент Social перенести по следующему пути: @components/representation/demonstration/information
// [x] Добавить компонент ButtonSocial в папке @ui/button/<...> и заменить обычные кнопки в Social на эти
// [x] Перед добавлением компонента открыть Photoshop и 4 картинки объединить воедино
// [x] Добавить компонент Images внутри Demonstration, который имеет изображение с 4 устройствами

interface PropsLayoutRoute {}

const LayoutRoute: React.FC<PropsLayoutRoute> = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default LayoutRoute
