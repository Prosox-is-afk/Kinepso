import mongoose, { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: {
        type: String,
        enum: ["site", "mobile", "logiciel"],
        required: true,
    },
});

const Project = models.Project || model("Project", ProjectSchema);

export default Project;
