
import { Header, FileUpload, PromptInput, SummaryDisplay, EmailShare, ActionButtons, MessageDisplay, Footer } from './components';

const App = () => {
  return (
    <div>   
      <Header />
      <FileUpload />
      <PromptInput />
      <SummaryDisplay />
      <EmailShare />
      <ActionButtons />
      <MessageDisplay />
      <Footer />
    </div>
  );
};

export default App;