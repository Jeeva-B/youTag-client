import { Routes, Route } from "react-router-dom";
import Tags from "../component/tags/Tags";
import Trending from "../component/trending/Trending";
import VideoTags from "../component/tags/VideoTags";

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