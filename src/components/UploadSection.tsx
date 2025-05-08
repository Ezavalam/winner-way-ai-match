
import React from 'react';
import { Upload } from 'lucide-react';
import { Input } from '@/components/ui/input';

const UploadSection: React.FC = () => {
  return (
    <section className="section" id="upload">
      <div className="winner-container max-w-5xl">
        <div className="bg-white/80 rounded-3xl p-8 md:p-12 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-winner-green mb-6 text-center">
            Ready to Improve Your Game?
          </h2>
          
          <div className="upload-area h-64 mb-8 cursor-pointer group">
            <input
              type="file"
              accept="video/mp4"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              aria-label="Upload video"
            />
            <Upload className="h-12 w-12 text-winner-green/60 mb-4 group-hover:text-winner-green" />
            <p className="text-center text-winner-green/80 text-lg mb-2">
              Drag & drop your tennis video here
            </p>
            <p className="text-center text-winner-green/60 text-sm">
              or click to upload (mp4 format)
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-winner-green/80 mb-1">
                Email address
              </label>
              <Input
                type="email"
                id="email"
                placeholder="your@email.com"
                className="w-full bg-white border-winner-green/20 focus:border-winner-green focus:ring-winner-green"
                required
              />
            </div>
            <div className="self-end">
              <button className="btn-primary w-full md:w-auto">
                Analyze Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
