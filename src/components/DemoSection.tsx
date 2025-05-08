
import React from 'react';

const DemoSection: React.FC = () => {
  return (
    <section className="section bg-white/50" id="demo">
      <div className="winner-container max-w-6xl">
        <h2 className="text-3xl font-bold text-winner-green mb-3 text-center">See the Results</h2>
        <p className="text-xl text-winner-green/70 mb-12 text-center max-w-3xl mx-auto">
          Your stroke. Compared to the pros. Here's how you'll improve.
        </p>
        
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="aspect-video bg-winner-green/10 rounded-xl mb-4 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599171913807-2d1c12b3f5cc?auto=format&fit=crop&w=800&q=80"
                  alt="Tennis player forehand"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg text-winner-green">Your Technique</h3>
              <p className="text-winner-green/70">Key points identified from your stroke</p>
            </div>
            
            <div>
              <div className="aspect-video bg-winner-green/10 rounded-xl mb-4 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599171879624-9bbba8069baf?auto=format&fit=crop&w=800&q=80"
                  alt="Pro player forehand"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg text-winner-green">Pro Reference</h3>
              <p className="text-winner-green/70">Perfect technique for comparison</p>
            </div>
          </div>
          
          <div className="mt-8 bg-winner-green/5 p-6 rounded-xl">
            <h3 className="font-bold text-xl text-winner-green mb-3">AI Analysis</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="bg-winner-green text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <p className="text-winner-green/80">Your racket preparation happens too late, causing rushed strokes</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-winner-green text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <p className="text-winner-green/80">Your follow-through is shortened, reducing power and control</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-winner-green text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <p className="text-winner-green/80">Improving hip rotation would add 15% more power to your shot</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
