import { Routes, Route } from "react-router-dom";
import Tags from "../component/Tags";
import Trending from "../component/Trending";
import VideoTags from "../component/VideoTags";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Tags />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/videotags" element={<VideoTags />} />
        </Routes>
    );
};

export default AppRoutes;