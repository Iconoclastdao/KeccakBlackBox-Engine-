import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  color: #fff;
  background-color: #121212;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  font-family: "Arial", sans-serif;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
  color: #4caf50;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #ff9800;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const InstructionList = styled.ul`
  list-style: disc;
  margin-left: 20px;
  font-size: 16px;
  line-height: 1.6;
`;

const CodeBlock = styled.pre`
  background-color: #1e1e1e;
  padding: 16px;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 14px;
  line-height: 1.5;
  color: #e0e0e0;
`;

const InstructionPage: React.FC = () => (
  <Container>
    <Title>How to Use KeccakBlackBox Engine: Real-World Integration Guide</Title>

    <Section>
      <SectionTitle>Abstract</SectionTitle>
      <Paragraph>
        This document provides a step-by-step guide for integrating and using the <strong>KeccakBlackBox Engine</strong> in real-world Ethereum dApps, ZK systems, and autonomous protocols. It includes contract usage, examples, and integration patterns.
      </Paragraph>
      <Paragraph>
        The guide is designed for Solidity developers, zkSNARK engineers, and teams building decentralized infrastructure needing reproducible and traceable Keccak-based entropy.
      </Paragraph>
    </Section>

    <Section>
      <SectionTitle>1. Prerequisites</SectionTitle>
      <InstructionList>
        <li>Basic familiarity with Solidity and smart contract development.</li>
        <li>Node.js environment with Hardhat or Foundry.</li>
        <li>Wallet connected to Arbitrum One (for live contract interactions).</li>
        <li>Optional: Circom or Noir knowledge for SNARK usage.</li>
      </InstructionList>
    </Section>

    <Section>
      <SectionTitle>2. Contract Details</SectionTitle>
      <Paragraph>Contract is live and verified on Arbitrum One.</Paragraph>
      <InstructionList>
        <li><strong>Contract Address:</strong> <code>0x5E554947137A0dC0c153D3BA6542e2d34E68CF06</code></li>
        <li><strong>Verified ABI:</strong> <a href="https://repo.sourcify.dev/42161/0x5E554947137A0dC0c153D3BA6542e2d34E68CF06" target="_blank">Sourcify ABI</a></li>
      </InstructionList>
    </Section>

    <Section>
      <SectionTitle>3. Basic Usage Flow</SectionTitle>
      <Paragraph>The KeccakBlackBox Engine follows a commit → reveal → trace → prove workflow:</Paragraph>
      <InstructionList>
        <li><strong>Step 1:</strong> User commits a hashed entropy value.</li>
        <li><strong>Step 2:</strong> Reveals entropy (with optional fee).</li>
        <li><strong>Step 3:</strong> Engine logs all Keccak sponge steps (absorb, permute, squeeze).</li>
        <li><strong>Step 4:</strong> Trace root exported for SNARK verification or off-chain audit.</li>
      </InstructionList>
    </Section>

    <Section>
      <SectionTitle>4. Solidity Integration Example</SectionTitle>
      <Paragraph>Here’s how to use the engine from another smart contract:</Paragraph>
      <CodeBlock>
{`interface IKeccakBlackBox {
  function commitEntropy(bytes32 commitment) external;
  function revealEntropy(bytes calldata entropy) external payable;
  function getTraceRoot() external view returns (bytes32);
}

contract MyGame {
  IKeccakBlackBox public engine = IKeccakBlackBox(0x5E554947137A0dC0c153D3BA6542e2d34E68CF06);

  function commit(bytes32 commitment) external {
    engine.commitEntropy(commitment);
  }

  function reveal(bytes calldata entropy) external payable {
    engine.revealEntropy{value: msg.value}(entropy);
  }

  function checkTrace() external view returns (bytes32) {
    return engine.getTraceRoot();
  }
}`}
      </CodeBlock>
    </Section>

    <Section>
      <SectionTitle>5. JavaScript Frontend Example (ethers.js)</SectionTitle>
      <CodeBlock>
{`const engineAddress = "0x5E554947137A0dC0c153D3BA6542e2d34E68CF06";
const engineABI = [ /* ABI here */ ];
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const engine = new ethers.Contract(engineAddress, engineABI, signer);

const entropy = ethers.utils.randomBytes(32);
const hash = ethers.utils.keccak256(entropy);

// Step 1: Commit
await engine.commitEntropy(hash);

// Step 2: Reveal later
await engine.revealEntropy(entropy, { value: ethers.utils.parseEther("0.001") });

// Step 3: Get trace root
const root = await engine.getTraceRoot();
console.log("Trace Root:", root);`}
      </CodeBlock>
    </Section>

    <Section>
      <SectionTitle>6. ZK Circuit Integration</SectionTitle>
      <Paragraph>
        You can use the exported trace root in SNARK-friendly tools like Circom or Noir. This enables verifiable hashing inside your ZK circuits.
      </Paragraph>
      <InstructionList>
        <li>Log all sponge steps using engine's internal trace function.</li>
        <li>Export Merkle proof of trace state.</li>
        <li>Use root + inclusion proof as public input in your SNARK verifier.</li>
      </InstructionList>
    </Section>

    <Section>
      <SectionTitle>7. Example Use Case: Verifiable Dice Roll</SectionTitle>
      <Paragraph>Use the engine for fair, auditable randomness in games.</Paragraph>
      <InstructionList>
        <li>User commits entropy seed before game starts.</li>
        <li>Reveals it during game; engine logs trace.</li>
        <li>Smart contract uses trace root to verify it was not tampered with.</li>
        <li>Dice roll derived from hashed entropy modulo 6.</li>
      </InstructionList>
      <CodeBlock>{`uint256 result = uint256(keccak256(entropy)) % 6 + 1; // 1-6 dice roll`}</CodeBlock>
    </Section>

    <Section>
      <SectionTitle>8. Example Use Case: L2 Sequencer Entropy Oracle</SectionTitle>
      <Paragraph>Layer 2 rollups or appchains can use KeccakBlackBox as their entropy provider:</Paragraph>
      <InstructionList>
        <li>Sequencer posts a commitment every block (hash of future entropy).</li>
        <li>Reveals it next block with trace logged by engine.</li>
        <li>Rollup verifier or light clients check inclusion + trace root.</li>
        <li>No dependency on external randomness providers.</li>
      </InstructionList>
    </Section>

    <Section>
      <SectionTitle>9. Developer Tools & Resources</SectionTitle>
      <InstructionList>
        <li><strong>ABI & Source:</strong> <a href="https://repo.sourcify.dev/42161/0x5E554947137A0dC0c153D3BA6542e2d34E68CF06" target="_blank">Sourcify</a></li>
        <li><strong>Example SDK:</strong> <em>Coming Soon</em></li>
        <li><strong>Test Scripts:</strong> Hardhat + Foundry examples under development</li>
        <li><strong>Frontend Templates:</strong> React/Next.js boilerplate in progress</li>
      </InstructionList>
    </Section>

    <Section>
      <SectionTitle>10. Conclusion</SectionTitle>
      <Paragraph>
        <strong>KeccakBlackBox Engine</strong> makes entropy auditable, trustless, and modular. Whether you’re building games, ZK circuits, or autonomous agents, this engine brings verifiable randomness to your stack—securely and affordably.
      </Paragraph>
    </Section>
  </Container>
);

export default InstructionPage;