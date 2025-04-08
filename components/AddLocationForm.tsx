"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AddLocationForm() {
  const [formData, setFormData] = useState({
    name: "",
    type: "balta",
    latitude: "",
    longitude: "",
    description: "",
    fishTypes: "",
    imageUrl: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/locations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          fishTypes: formData.fishTypes.split(",").map((type) => type.trim()),
          latitude: parseFloat(formData.latitude),
          longitude: parseFloat(formData.longitude),
        }),
      });

      if (!response.ok) throw new Error("Failed to add location");

      // Reset form
      setFormData({
        name: "",
        type: "balta",
        latitude: "",
        longitude: "",
        description: "",
        fishTypes: "",
        imageUrl: "",
      });

      alert("Locație adăugată cu succes!");
    } catch (error) {
      console.error("Error adding location:", error);
      alert("Eroare la adăugarea locației");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[#4a7c59]">Adaugă o Locație Nouă</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Nume</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4a7c59] focus:ring-[#4a7c59]"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Tip</label>
        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4a7c59] focus:ring-[#4a7c59]"
        >
          <option value="balta">Balta</option>
          <option value="lac">Lac</option>
          <option value="rau">Râu</option>
          <option value="mare">Mare</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Latitudine</label>
          <input
            type="number"
            step="any"
            value={formData.latitude}
            onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4a7c59] focus:ring-[#4a7c59]"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Longitudine</label>
          <input
            type="number"
            step="any"
            value={formData.longitude}
            onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4a7c59] focus:ring-[#4a7c59]"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Descriere</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4a7c59] focus:ring-[#4a7c59]"
          rows={3}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Specii de Pești (separate prin virgulă)</label>
        <input
          type="text"
          value={formData.fishTypes}
          onChange={(e) => setFormData({ ...formData, fishTypes: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4a7c59] focus:ring-[#4a7c59]"
          placeholder="Șalău, Caras, Biban"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">URL Imagine</label>
        <input
          type="url"
          value={formData.imageUrl}
          onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4a7c59] focus:ring-[#4a7c59]"
        />
      </div>

      <Button type="submit" className="w-full bg-[#4a7c59] hover:bg-[#3a6c49] text-white">
        Adaugă Locație
      </Button>
    </form>
  );
}
