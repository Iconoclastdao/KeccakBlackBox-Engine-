import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  font-family: "Bradley DJR Variable", sans-serif;
  background-image: url('/logo1.jpeg'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: white;
  text-shadow: 2px 2px 4px black;
  width: 100%;
  max-width: 900px;
  margin: 24px auto;
  padding: var(--padding);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const List = styled.ul`
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  list-style: disc;

  li {
    margin-bottom: 0.5rem;
  }
`;

const WhitePaper: React.FC = () => (
  <Container>
    <Title>KeccakBlackBox Engine: Verifiable Entropy & Traceable Hashing for Smart Contracts</Title>

    {/* Abstract */}
    <Section>
      <SectionTitle>Abstract</SectionTitle>
      <Paragraph>
        The <strong>KeccakBlackBox Engine</strong> is a modular, on-chain entropy and Keccak hashing engine designed for zero-knowledge (ZK) compatibility, verifiability, and decentralized applications. It enables smart contracts and ZK circuits to access traceable, reproducible Keccak entropy—without relying on external oracles.
      </Paragraph>
      <Paragraph>
        Deployed and verified on Arbitrum One at: <code>0x5E554947137A0dC0c153D3BA6542e2d34E68CF06</code>, the engine is designed by a solo developer focused on building primitives for the next generation of modular and trustless infrastructure.
      </Paragraph>
    </Section>

    {/* 1. Introduction */}
    <Section>
      <SectionTitle>1. Introduction: The Entropy Problem in Web3</SectionTitle>
      <Paragraph>
        Web3 applications—from gaming to DAOs to rollups—depend heavily on entropy, randomness, and reproducible hashing. Today’s solutions fall short:
      </Paragraph>
      <List>
        <li><strong>Chainlink VRF</strong>: Centralized and expensive.</li>
        <li><strong>On-chain randomness</strong>: Easily manipulated.</li>
        <li><strong>ZK applications</strong>: Require traceable Keccak paths, which Solidity and EVM don't provide natively.</li>
      </List>
      <Paragraph>
        There is currently no modular, trustless engine that allows both smart contracts and ZK systems to trace and verify entropy pipelines using Keccak. 
      </Paragraph>
    </Section>

    {/* 2. Solution Overview */}
    <Section>
      <SectionTitle>2. KeccakBlackBox Engine</SectionTitle>
      <Paragraph>
        <strong>KeccakBlackBox Engine</strong> is a trustless entropy system providing:
      </Paragraph>
      <List>
        <li>Entropy-as-a-Service via commit-reveal + payment system.</li>
        <li>Traceable Keccak Sponge with step-by-step state logging.</li>
        <li>SNARK-friendly trace root exports.</li>
        <li>Merkle proofs for entropy inclusion verification.</li>
        <li>Scalable, deployable on-chain storage shards.</li>
      </List>
      <Paragraph>Written in Solidity and deployed on Arbitrum, it's designed to be modular, auditable, and provable.</Paragraph>
    </Section>

    {/* 3. Architecture */}
    <Section>
      <SectionTitle>3. Architecture Overview</SectionTitle>
      <List>
        <li><strong>commitEntropy(bytes32)</strong>: Frontrun-resistant entropy commitment.</li>
        <li><strong>revealEntropy(bytes)</strong>: Paid entropy reveal with verification.</li>
        <li><strong>SpongeStepTrace</strong>: Logs internal state before, absorb, permute.</li>
        <li><strong>MerkleRoot</strong>: Validates entropy using inclusion proofs.</li>
        <li><strong>deployShard()</strong>: Deploys new lightweight storage contracts.</li>
        <li><strong>getTraceRoot()</strong>: Exports trace hashes for SNARK verification.</li>
      </List>
    </Section>

    {/* 4. Security & ZK Compatibility */}
    <Section>
      <SectionTitle>4. Security and ZK Compatibility</SectionTitle>
      <List>
        <li>Immutable trace logs of entropy processing steps.</li>
        <li>Merkle-root anchored trace trees for inclusion proofs.</li>
        <li>SNARK-friendly output for Circom, Noir, Risc0 integrations.</li>
        <li>All state transitions reproducible on-chain.</li>
      </List>
    </Section>

    {/* 5. Use Cases */}
    <Section>
      <SectionTitle>5. Use Cases</SectionTitle>
      <List>
        <li>Verifiable randomness for games and DAOs.</li>
        <li>Entropy source for L2 sequencers and rollups.</li>
        <li>Proof-of-Keccak for ZK circuits needing full trace paths.</li>
        <li>Auditable, decentralized alternatives to centralized oracles.</li>
      </List>
    </Section>

    {/* 6. Roadmap */}
    <Section>
      <SectionTitle>6. Roadmap</SectionTitle>
      <List>
        <li><strong>v0 (Now)</strong>: PoC live on Arbitrum, tracing engine functional.</li>
        <li><strong>v1</strong>: Frontend + SDK + Dev tools.</li>
        <li><strong>v2</strong>: Entropy Oracle for dApps, modular chains, and ZK rollups.</li>
        <li><strong>v3</strong>: Cross-chain entropy bridge.</li>
      </List>
    </Section>

    {/* 7. Why Now */}
    <Section>
      <SectionTitle>7. Why Now</SectionTitle>
      <Paragraph>
        Modular blockchains and ZK systems are exploding in demand. Projects are starved for verifiable, low-cost, native entropy sources. Keccak-based proving systems are maturing and need infrastructure that can trace the state of each permutation and padding operation.
      </Paragraph>
      <List>
        <li>No competing solutions for verifiable Keccak tracing on-chain.</li>
        <li>ZK circuits need reproducible, step-level Keccak input/output data.</li>
        <li>Rollups and appchains need verifiable entropy that's auditable and local.</li>
      </List>
    </Section>

    {/* 8. The Ask */}
    <Section>
      <SectionTitle>8. The Ask</SectionTitle>
      <List>
        <li>Support for a 6-month development runway.</li>
        <li>Funding to build frontend, explorer, and SDK tooling.</li>
        <li>Introductions to ZK teams, rollups, and ecosystem dev grants.</li>
      </List>
      <Paragraph>
        This is a foundational primitive for decentralized systems that need reproducible, verifiable, and modular Keccak entropy flows.
      </Paragraph>
    </Section>

    {/* 9. Deployment Details */}
    <Section>
      <SectionTitle>9. Deployment Details</SectionTitle>
      <Paragraph>
        Deployed and verified on Arbitrum One at:
        <br />
        <code>0x5E554947137A0dC0c153D3BA6542e2d34E68CF06</code>
        <br />
        Verified source: <a href="https://repo.sourcify.dev/42161/0x5E554947137A0dC0c153D3BA6542e2d34E68CF06" target="_blank" rel="noreferrer">Sourcify</a>
      </Paragraph>
    </Section>

    {/* 10. Conclusion */}
    <Section>
      <SectionTitle>10. Conclusion</SectionTitle>
      <Paragraph>
        <strong>KeccakBlackBox Engine</strong> is a modular, provable entropy engine for ZK systems, rollups, and dApps. It represents a trustless bridge between smart contract autonomy and cryptographic verifiability.
      </Paragraph>
    </Section>
  </Container>
);

export default WhitePaper;