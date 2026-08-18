import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "workType", "location", "featured"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Project Title",
      required: true,
    },
    {
      name: "location",
      type: "text",
      label: "Location",
      defaultValue: "Kochi, Kerala",
      required: true,
    },
    {
      name: "workType",
      type: "select",
      label: "Work Type / Service Category",
      required: true,
      options: [
        { label: "Home Theatre / Private Cinema", value: "Home Theatre" },
        { label: "HiFi 2-Channel Audio", value: "HiFi Audio" },
        { label: "Smart Home Automation", value: "Home Automation" },
        { label: "Acoustic Treatment & Calibration", value: "Acoustics" },
        { label: "Commercial AV & Auditoriums", value: "Commercial AV" },
      ],
      defaultValue: "Home Theatre",
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      label: "Category (Optional)",
      required: false,
    },
    {
      name: "year",
      type: "text",
      label: "Year Completed",
      defaultValue: "2024",
    },
    {
      name: "featured",
      type: "checkbox",
      label: "Featured Project (Show on Homepage)",
      defaultValue: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Project Description",
      required: true,
    },
    {
      name: "equipment",
      type: "array",
      label: "Key Equipment Installed",
      fields: [
        {
          name: "item",
          type: "text",
          label: "Equipment Name / Model",
          required: true,
        },
      ],
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      label: "Main Cover Image",
    },
    {
      name: "coverImageUrl",
      type: "text",
      label: "Cover Image Fallback URL (Optional)",
    },
    {
      name: "gallery",
      type: "array",
      label: "Project Images Gallery",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Gallery Photo",
        },
        {
          name: "imageUrl",
          type: "text",
          label: "Image Fallback URL (Optional)",
        },
      ],
    },
  ],
};
